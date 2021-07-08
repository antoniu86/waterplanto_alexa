/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');
const util = require('./util');
const interceptors = require('./interceptors');
const logic = require('./logic');

const CheckPlantSettingsIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'CheckPlantSettingsIntent';
    },
    async handle(handlerInput) {
        var accessToken = handlerInput.requestEnvelope.context.System.user.accessToken;
        var language = Alexa.getLocale(handlerInput.requestEnvelope);
        
        if (accessToken === undefined){
            var speechText = handlerInput.t('ACCOUNT_LINKING');
    
            return handlerInput.responseBuilder
                .speak(speechText)
                .withLinkAccountCard()
                .getResponse();
        } else {
            const itemSlot = handlerInput.requestEnvelope.request.intent.slots.plant;
            
            let itemName;
            
            if (itemSlot && itemSlot.value) {
              itemName = itemSlot.value.toLowerCase();
            }
    
            const json = await logic.getApiCall(accessToken, '/check_plant_settings', language, {name: itemName});
            
            let speechText = handlerInput.t(json.data.message);
            
            return handlerInput.responseBuilder
                .speak(speechText)
                .withShouldEndSession(true)
                .getResponse();
        }
    }
};

const SetPlantDurationIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'SetPlantDurationIntent';
    },
    async handle(handlerInput) {
        var accessToken = handlerInput.requestEnvelope.context.System.user.accessToken;
        var language = Alexa.getLocale(handlerInput.requestEnvelope);
        
        if (accessToken === undefined){
            var speechText = handlerInput.t('ACCOUNT_LINKING');
    
            return handlerInput.responseBuilder
                .speak(speechText)
                .withLinkAccountCard()
                .getResponse();
        } else {
            const itemSlot1 = handlerInput.requestEnvelope.request.intent.slots.plant;
            const itemSlot2 = handlerInput.requestEnvelope.request.intent.slots.value;
            let name;
            
            if (itemSlot1 && itemSlot1.value) {
              name = itemSlot1.value.toLowerCase();
            }
            
            let value;
            
            if (itemSlot2 && itemSlot2.value) {
              value = itemSlot2.value;
            }
    
            const json = await logic.getApiCall(accessToken, '/set_plant_duration', language, {name: name, duration: value});
            
            let speechText = handlerInput.t(json.data.message);
            
            return handlerInput.responseBuilder
                .speak(speechText)
                .withShouldEndSession(true)
                .getResponse();
        }
    }
};

const WaterPlantsIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'WaterPlantsIntent';
    },
    async handle(handlerInput) {
        var accessToken = handlerInput.requestEnvelope.context.System.user.accessToken;
        var language = Alexa.getLocale(handlerInput.requestEnvelope);
        
        if (accessToken === undefined){
            var speechText = handlerInput.t('ACCOUNT_LINKING');
    
            return handlerInput.responseBuilder
                .speak(speechText)
                .withLinkAccountCard()
                .getResponse();
        } else {
            const json = await logic.getApiCall(accessToken, '/water_plants', language);
            
            let speechText = handlerInput.t(json.data.message);
            
            return handlerInput.responseBuilder
                .speak(speechText)
                .withShouldEndSession(true)
                .getResponse();
        }
    }
};

const SetPlantHumidityIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'SetPlantHumidityIntent';
    },
    async handle(handlerInput) {
        var accessToken = handlerInput.requestEnvelope.context.System.user.accessToken;
        var language = Alexa.getLocale(handlerInput.requestEnvelope);
        
        if (accessToken === undefined){
            var speechText = handlerInput.t('ACCOUNT_LINKING');
    
            return handlerInput.responseBuilder
                .speak(speechText)
                .withLinkAccountCard()
                .getResponse();
        } else {
            const itemSlot1 = handlerInput.requestEnvelope.request.intent.slots.plant;
            const itemSlot2 = handlerInput.requestEnvelope.request.intent.slots.value;
            let name;
            
            if (itemSlot1 && itemSlot1.value) {
              name = itemSlot1.value.toLowerCase();
            }
            
            let value;
            
            if (itemSlot2 && itemSlot2.value) {
              value = itemSlot2.value;
            }
    
            const json = await logic.getApiCall(accessToken, '/set_plant_humidity', language, {name: name, water_at: value});
            
            let speechText = handlerInput.t(json.data.message);
            
            return handlerInput.responseBuilder
                .speak(speechText)
                .withShouldEndSession(true)
                .getResponse();
        }
    }
};

const WaterPlantIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'WaterPlantIntent';
    },
    async handle(handlerInput) {
        var accessToken = handlerInput.requestEnvelope.context.System.user.accessToken;
        var language = Alexa.getLocale(handlerInput.requestEnvelope);
        
        if (accessToken === undefined){
            var speechText = handlerInput.t('ACCOUNT_LINKING');
    
            return handlerInput.responseBuilder
                .speak(speechText)
                .withLinkAccountCard()
                .getResponse();
        } else {
            const itemSlot = handlerInput.requestEnvelope.request.intent.slots.plant;
            let itemName;
            if (itemSlot && itemSlot.value) {
              itemName = itemSlot.value.toLowerCase();
            }
    
            const json = await logic.getApiCall(accessToken, '/water_plant', language, {name: itemName});
            
            let speechText = handlerInput.t(json.data.message);
            
            return handlerInput.responseBuilder
                .speak(speechText)
                .withShouldEndSession(true)
                .getResponse();
        }
    }
};

const CheckPlantDescriptionIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'CheckPlantDescriptionIntent';
    },
    async handle(handlerInput) {
        var accessToken = handlerInput.requestEnvelope.context.System.user.accessToken;
        var language = Alexa.getLocale(handlerInput.requestEnvelope);
        
        if (accessToken === undefined){
            var speechText = handlerInput.t('ACCOUNT_LINKING');
    
            return handlerInput.responseBuilder
                .speak(speechText)
                .withLinkAccountCard()
                .getResponse();
        } else {
            const itemSlot = handlerInput.requestEnvelope.request.intent.slots.plant;
            
            let itemName;
            
            if (itemSlot && itemSlot.value) {
              itemName = itemSlot.value.toLowerCase();
            }
    
            const json = await logic.getApiCall(accessToken, '/check_plant_description', language, {name: itemName});
            
            let speechText = handlerInput.t(json.data.message);
            
            return handlerInput.responseBuilder
                .speak(speechText)
                .withShouldEndSession(true)
                .getResponse();
        }
    }
};

const CheckPlantIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'CheckPlantIntent';
    },
    async handle(handlerInput) {
        var accessToken = handlerInput.requestEnvelope.context.System.user.accessToken;
        var language = Alexa.getLocale(handlerInput.requestEnvelope);
        
        if (accessToken === undefined){
            var speechText = handlerInput.t('ACCOUNT_LINKING');
    
            return handlerInput.responseBuilder
                .speak(speechText)
                .withLinkAccountCard()
                .getResponse();
        } else {
            const itemSlot = handlerInput.requestEnvelope.request.intent.slots.plant;
            let itemName;
            if (itemSlot && itemSlot.value) {
              itemName = itemSlot.value.toLowerCase();
            }
    
            const json = await logic.getApiCall(accessToken, '/check_plant', language, {name: itemName});
            
            let speechText = handlerInput.t(json.data.message);
            
            return handlerInput.responseBuilder
                .speak(speechText)
                .withShouldEndSession(true)
                .getResponse();
        }
    }
};

const CheckPlantsIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'CheckPlantsIntent';
    },
    async handle(handlerInput) {
        var accessToken = handlerInput.requestEnvelope.context.System.user.accessToken;
        var language = Alexa.getLocale(handlerInput.requestEnvelope);
        
        if (accessToken === undefined){
            var speechText = handlerInput.t('ACCOUNT_LINKING');
    
            return handlerInput.responseBuilder
                .speak(speechText)
                .withLinkAccountCard()
                .getResponse();
        } else {
            const json = await logic.getApiCall(accessToken, '/check_plants', language);
            
            let speechText;
            
            if (json.data.count === 0) {
                speechText = handlerInput.t('NO_DEVICES');
            } else if (json.data.count === 1) {
                var assignment = json.data.list[0];
                speechText = handlerInput.t('DEVICE', {count: json.data.count});
                speechText += assignment;
            } else {
                var list = json.data.list;
                speechText = handlerInput.t('DEVICES', {count: json.data.count});
                
                for (var i = 0; i < list.length; i++) {
                    speechText += " " + list[i] + "<break time='650ms'/>";
                }
            }
            
            return handlerInput.responseBuilder
                .speak(speechText)
                .withShouldEndSession(true)
                .getResponse();
        }
    }
};

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    async handle(handlerInput) {
        var accessToken = handlerInput.requestEnvelope.context.System.user.accessToken;
        
        if (accessToken === undefined){
            var speechText = handlerInput.t('ACCOUNT_LINKING');
    
            return handlerInput.responseBuilder
                .speak(speechText)
                .withLinkAccountCard()
                .getResponse();
        } else {
            const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
            const sessionCounter = sessionAttributes['sessionCounter'];
            
            let speechText = handlerInput.t('NOTIFICATION_SOUND');
            
            if (sessionCounter) {
                speechText += handlerInput.t('WELCOME_BACK_MSG');
            } else {
                speechText += handlerInput.t('WELCOME_MSG');
            }
    
            return handlerInput.responseBuilder
                .speak(speechText)
                .reprompt(handlerInput.t('REPROMPT_MSG'))
                .getResponse();
        }
    }
};

/*

    OTHER STUFF

*/

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speechText = handlerInput.t('HELP_MSG');

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(handlerInput.t('REPROMPT_MSG'))
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        let speechText = handlerInput.t('GOODBYE_MSG');

        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};

/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = handlerInput.t('FALLBACK_MSG');

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};

/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = handlerInput.t('REFLECTOR_MSG', {intent: intentName});

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = handlerInput.t('ERROR_MSG');
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        CheckPlantsIntentHandler,
        CheckPlantIntentHandler,
        CheckPlantDescriptionIntentHandler,
        WaterPlantIntentHandler,
        SetPlantHumidityIntentHandler,
        WaterPlantsIntentHandler,
        SetPlantDurationIntentHandler,
        CheckPlantSettingsIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .addRequestInterceptors(
        interceptors.LoadAttributesRequestInterceptor,
        interceptors.LocalisationRequestInterceptor,
        interceptors.LoggingRequestInterceptor)
    .addResponseInterceptors(
        interceptors.LoggingResponseInterceptor,
        interceptors.SaveAttributesResponseInterceptor)
    .withPersistenceAdapter(util.getPersistenceAdapter())
    .withApiClient(new Alexa.DefaultApiClient())
    .lambda();