module.exports = {
    en: {
        translation: {
            // linking error
            ACCOUNT_LINKING: `You must have a WaterPlanto account to use this skill. Please use the Alexa app to link your Amazon account with your WaterPlanto account.`,
            
            // init / welcome / exit
            NOTIFICATION_SOUND: `<audio src="soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_positive_response_01"/>`,
            WELCOME_MSG: `Welcome to WaterPlanto. I can help you with information about your devices. What would you like to know?`,
            WELCOME_BACK_MSG: `Welcome back to WaterPlanto. I can help you with information about your devices. What would you like to know?`,
            WELCOME_BACK_SHORT_MSG: `Welcome back to WaterPlanto. What would you like to know?`,
            GOODBYE_MSG: ['Goodbye! ', 'So long! ', 'See you later! ', 'Cheers! ', 'Don\'t be a fool. Stay in school!', 'See you later alligator!', 'Till next time!', 'Thank you for using WaterPlanto!'],
            
            // specific messages
            NO_DEVICES: 'You have no devices connected to your account.',
            DEVICE: 'You have {{count}} device. Reading information now: ',
            DEVICES: 'You have {{count}} devices. Reading information now: ',
            NO_DEVICE_TO_WATER: 'You have no devices with that name.',
            DEVICE_TO_WATER: 'The device called {{name}} was asked to water the plant. Sould be starting in the next few moments.',
            NO_DEVICE_TO_CHECK: 'You have no devices with that name.',
            DEVICE_TO_CHECK: 'The device called {{name}} was asked to water the plant. Sould be starting in the next few moments.',
            
            // announcements
            ANNOUNCEMENT: `There is {{count}} announcement. Reading it now:`,
            ANNOUNCEMENTS: `There are {{count}} announcements. Reading them now:`,
            NO_ANNOUNCEMENTS: `There are no announcements.`,
            
            // help
            HELP_MSG: `You can ask me for information about your devices. You can also aske me to switch on any of them. What would you like to know?`,
            REPROMPT_MSG: `If you're not sure what to do next try asking for help. If you want to leave just say stop. What would you like to do next? `,

            // other
            REFLECTOR_MSG: `You just triggered {{intent}}`,
            FALLBACK_MSG: `Sorry, I don't know about that. If you're not sure what to do next try asking for help. If you want to leave just say stop. What would you like to do next?`,
            ERROR_MSG: `Sorry, I had trouble doing what you asked. If you're not sure what to do next try asking for help. If you want to leave just say stop. What would you like to do next?`
        }
    }
}