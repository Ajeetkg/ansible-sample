/// <reference path="../../../../typings/main.d.ts" />

module app.config {
    export class AppConfig {
        platformApiUrl:string = '{{ platformApiUrl }}';
        platformAdminUrl:string = '{{ platformAdminUrl }}';
        publicDomainId:string = '{{ publicDomainId }}';
        defaultApplicationId:string = '{{ defaultApplicationId }}';
        defaultGroupName:string = '{{ defaultGroupName }}';
        FIELD_LENGTHS = {
            name: {min: 1, max: 128},
            description: {min: 1, max: 256},
            email: {min: 1, max: 100}
        }
    }

    angular
        .module('app.config', [])
        .constant('wac.config', new AppConfig());
}
