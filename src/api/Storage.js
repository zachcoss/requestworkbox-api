const 
    ValidateStorage = require('../validate/Storage');

module.exports = function(state) {
    const { $axios } = state

    return {
        createStorage: async function(options) {
            try {
                const snapshot = { projectId: state.projectId }
                const payload = ValidateStorage.createStorage.validate(snapshot, options)
                const request = await ValidateStorage.createStorage.request($axios, payload)
                return ValidateStorage.createStorage.response(request)
            } catch(err) {
                return ValidateStorage.createStorage.error(err)
            }
        },
        listStorages: async function(options) {
            try {
                const snapshot = { projectId: state.projectId }
                const payload = ValidateStorage.listStorages.validate(snapshot, options)
                const request = await ValidateStorage.listStorages.request($axios, payload)
                return ValidateStorage.listStorages.response(request)
            } catch(err) {
                return ValidateStorage.listStorages.error(err)
            }
        },
        getStorage: async function(options) {
            try {
                const snapshot = { projectId: state.projectId }
                const payload = ValidateStorage.getStorage.validate(snapshot, options)
                const request = await ValidateStorage.getStorage.request($axios, payload)
                return ValidateStorage.getStorage.response(request)
            } catch(err) {
                return ValidateStorage.getStorage.error(err)
            }
        },
        getStorageData: async function(options) {
            try {
                const snapshot = { projectId: state.projectId }
                const payload = ValidateStorage.getStorageData.validate(snapshot, options)
                const request = await ValidateStorage.getStorageData.request($axios, payload)
                return ValidateStorage.getStorageData.response(request)
            } catch(err) {
                return ValidateStorage.getStorageData.error(err)
            }
        },
        getStorageUsage: async function(options) {
            try {
                const snapshot = { projectId: state.projectId }
                const payload = ValidateStorage.getStorageUsage.validate(snapshot, options)
                const request = await ValidateStorage.getStorageUsage.request($axios, payload)
                return ValidateStorage.getStorageUsage.response(request)
            } catch(err) {
                return ValidateStorage.getStorageUsage.error(err)
            }
        },
        updateTextStorageData: async function(options) {
            try {
                const snapshot = { projectId: state.projectId }
                const payload = ValidateStorage.updateTextStorageData.validate(snapshot, options)
                const request = await ValidateStorage.updateTextStorageData.request($axios, payload)
                return ValidateStorage.updateTextStorageData.response(request)
            } catch(err) {
                return ValidateStorage.updateTextStorageData.error(err)
            }
        },
        saveStorageChanges: async function(options) {
            try {
                const snapshot = { projectId: state.projectId }
                const payload = ValidateStorage.saveStorageChanges.validate(snapshot, options)
                const request = await ValidateStorage.saveStorageChanges.request($axios, payload)
                return ValidateStorage.saveStorageChanges.response(request)
            } catch(err) {
                return ValidateStorage.saveStorageChanges.error(err)
            }
        },
        archiveStorage: async function(options) {
            try {
                const snapshot = { projectId: state.projectId }
                const payload = ValidateStorage.archiveStorage.validate(snapshot, options)
                const request = await ValidateStorage.archiveStorage.request($axios, payload)
                return ValidateStorage.archiveStorage.response(request)
            } catch(err) {
                return ValidateStorage.archiveStorage.error(err)
            }
        },
        restoreStorage: async function(options) {
            try {
                const snapshot = { projectId: state.projectId }
                const payload = ValidateStorage.restoreStorage.validate(snapshot, options)
                const request = await ValidateStorage.restoreStorage.request($axios, payload)
                return ValidateStorage.restoreStorage.response(request)
            } catch(err) {
                return ValidateStorage.restoreStorage.error(err)
            }
        },
    }
}