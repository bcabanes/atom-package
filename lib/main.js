module.exports = {
    'config': {
        'showHiddenFiles': {
            'title': 'Show hidden files',
            'type': 'boolean',
            'default': false
        },
        'upladOnSave': {
            'title': 'Upload on save',
            'description': 'When enable, remote file will be automatically uploaded when saved',
            'type': 'boolean',
            'default': true
        },
        'messagePanel': {
            'title': 'Display message panel',
            'type': 'boolean',
            'default': true
        },
        'sshPrivateKeyPath': {
            'title': 'Path to private SSH key',
            'type': 'string',
            'default': '~/.ssh/id_rsa'
        },
        'defaultSerializePath': {
            'title': 'Default path to serialize remoteEdit data',
            'type': 'string',
            'default': '~/.atom/remoteEdit.json'
        },
        'messagePanelTimeout': {
            'title': 'Timeout for message panel',
            'type': 'integer',
            'default': 6000
        },
        'agentToUse': {
            'title': 'SSH agent',
            'description': 'Overrides default SSH agent. See ssh2 docs for more info.',
            'type': 'string',
            'default': 'Default'
        }
    },
    'activate': function(state) {
        this.setupOpeners();
    },
    'setupOpeners': function() {
console.log('setupOpeners');
    }
};
