'use strict';

angular.module('bahmni.common.displaycontrol.custom')
    .directive('birthCertificate', ['observationsService', 'appService', 'spinner', function (observationsService, appService, spinner) {
        var link = function ($scope) {
            var conceptNames = ["HEIGHT"];
            $scope.contentUrl = appService.configBaseUrl() + "/customDisplayControl/views/birthCertificate.html";
            spinner.forPromise(observationsService.fetch($scope.patient.uuid, conceptNames, "latest", undefined, $scope.visitUuid, undefined).then(function (response) {
                $scope.observations = response.data;
            }));
        }

        return {
            restrict: 'E',
            template: '<ng-include src="contentUrl"/>',
            link: link
        }
    }]).directive('deathCertificate', ['$q','observationsService','visitService', 'bedService','appService', 'spinner','$sce', function ($q,observationsService, visitService, bedService,appService, spinner, $sce) 
    {
        var link = function ($scope) 
        {
            
            var conceptNames = ["Death Note"];
            spinner.forPromise(observationsService.fetch($scope.patient.uuid, conceptNames, "latest", undefined, $scope.visitUuid, undefined).then(function (response) {
                    $scope.observations = response.data[0];
                    

                }));
            $scope.contentUrl = appService.configBaseUrl() + "/customDisplayControl/views/deathCertificatehindi.html";
            
            spinner.forPromise($q.all([bedService.getAssignedBedForPatient($scope.patient.uuid),visitService.getVisitSummary($scope.visitUuid)]).then(function(results){
                    $scope.bedDetails = results[0];
                    $scope.visitSummary = results[1].data;
                }));
                
        };
        var controller = function($scope){
        	$scope.htmlLabel = function(label){
        		return $sce.trustAsHtml(label)
        	}
        }
        return {
            restrict: 'E',
            link: link,
            controller : controller,
            template: '<ng-include src="contentUrl"/>'
        }
    }]).directive('rntcpForm', ['$q','observationsService','visitService', 'bedService','appService', 'spinner','$sce', function ($q,observationsService, visitService, bedService,appService, spinner, $sce) 
    {
        var link = function ($scope) 
        {
            
            var conceptNames = ["RNTCP Form"];
            spinner.forPromise(observationsService.fetch($scope.patient.uuid, conceptNames, "latest", undefined, $scope.visitUuid, undefined).then(function (response) {
                    $scope.observations = response.data[0];   
                    $scope.rntcpform = []
                    function createForm(obs) {
                           if (obs.groupMembers.length == 0){
                              if ($scope.rntcpform[obs.conceptNameToDisplay] == undefined){
                                 $scope.rntcpform[obs.conceptNameToDisplay] = obs.valueAsString;
                              }
                              else{
                                 $scope.rntcpform[obs.conceptNameToDisplay] = $scope.rntcpform[obs.conceptNameToDisplay] + ' ' + obs.valueAsString;                                
                              }

                              if(obs.comment != null){
                                $scope.rntcpform[obs.conceptNameToDisplay] = $scope.rntcpform[obs.conceptNameToDisplay] + ' ' + obs.comment;
                              }   
                           }
                           else{
                              for(var i = 0; i < obs.groupMembers.length; i++) { 
                                   createForm(obs.groupMembers[i]);
                              }
                              
                           }

                    }
                    createForm(response.data[0]);

                }));
            $scope.contentUrl = appService.configBaseUrl() + "/customDisplayControl/views/rntcpform.html";
            
            spinner.forPromise($q.all([bedService.getAssignedBedForPatient($scope.patient.uuid),visitService.getVisitSummary($scope.visitUuid)]).then(function(results){
                    $scope.bedDetails = results[0];
                    $scope.visitSummary = results[1].data;
                }));
                
        };
        var controller = function($scope){
        	$scope.htmlLabel = function(label){
        		return $sce.trustAsHtml(label)
        	}
        }
        return {
            restrict: 'E',
            link: link,
            controller : controller,
            template: '<ng-include src="contentUrl"/>'
        }
    }]).directive('clinicalinfoTb', ['$q','observationsService','visitService', 'bedService','appService', 'spinner','$sce', function ($q,observationsService, visitService, bedService,appService, spinner, $sce) 
    {
        var link = function ($scope) 
        {
            
            var conceptNames = ["Clinincal Information TB"];
            spinner.forPromise(observationsService.fetch($scope.patient.uuid, conceptNames, "latest", undefined, $scope.visitUuid, undefined).then(function (response) {
                    $scope.observations = response.data[0];
                    $scope.rmrctForm = [];
                    function createForm(obs) {
                           if (obs.groupMembers.length == 0){
                              if ($scope.rmrctForm[obs.conceptNameToDisplay] == undefined){
                                 $scope.rmrctForm[obs.conceptNameToDisplay] = obs.valueAsString;
                              }
                              else{
                                 $scope.rmrctForm[obs.conceptNameToDisplay] = $scope.rmrctForm[obs.conceptNameToDisplay] + ' ' + obs.valueAsString;                                
                              }

                              if(obs.comment != null){
                                $scope.rmrctForm[obs.conceptNameToDisplay] = $scope.rmrctForm[obs.conceptNameToDisplay] + ' ' + obs.comment;
                              }   
                           }
                           else{
                              for(var i = 0; i < obs.groupMembers.length; i++) { 
                                   createForm(obs.groupMembers[i]);
                              }
                              
                           }

                    }
                    createForm(response.data[0]);

                }));
            $scope.contentUrl = appService.configBaseUrl() + "/customDisplayControl/views/clinicalinfotb.html";
            
            spinner.forPromise($q.all([bedService.getAssignedBedForPatient($scope.patient.uuid),visitService.getVisitSummary($scope.visitUuid)]).then(function(results){
                    $scope.bedDetails = results[0];
                    $scope.visitSummary = results[1].data;
                }));
                
        };
        var controller = function($scope){
        	$scope.htmlLabel = function(label){
        		return $sce.trustAsHtml(label)
        	}
        }
        return {
            restrict: 'E',
            link: link,
            controller : controller,
            template: '<ng-include src="contentUrl"/>'
        }
    }]).directive('pplhlthSptgrp', ['$q','observationsService','visitService', 'bedService','appService', 'spinner','$sce', function ($q,observationsService, visitService, bedService,appService, spinner, $sce) 
    {
        var link = function ($scope) 
        {
            
            var conceptNames = ["People Health Support Group Form"];
            spinner.forPromise(observationsService.fetch($scope.patient.uuid, conceptNames, "latest", undefined, $scope.visitUuid, undefined).then(function (response) {
                    $scope.observations = response.data[0];
                    $scope.hindujaform = []
                    function createForm(obs) {
                           if (obs.groupMembers.length == 0){
                              if ($scope.hindujaform[obs.conceptNameToDisplay] == undefined){
                                 $scope.hindujaform[obs.conceptNameToDisplay] = obs.valueAsString;
                              }
                              else{
                                 $scope.hindujaform[obs.conceptNameToDisplay] = $scope.hindujaform[obs.conceptNameToDisplay] + ' ' + obs.valueAsString;                                
                              }

                              if(obs.comment != null){
                                $scope.hindujaform[obs.conceptNameToDisplay] = $scope.hindujaform[obs.conceptNameToDisplay] + ' ' + obs.comment;
                              }   
                           }
                           else{
                              for(var i = 0; i < obs.groupMembers.length; i++) { 
                                   createForm(obs.groupMembers[i]);
                              }
                              
                           }

                    }
                    createForm(response.data[0]);

                    

                }));
            $scope.contentUrl = appService.configBaseUrl() + "/customDisplayControl/views/pplhlthsptgrp.html";
            
            spinner.forPromise($q.all([bedService.getAssignedBedForPatient($scope.patient.uuid),visitService.getVisitSummary($scope.visitUuid)]).then(function(results){
                    $scope.bedDetails = results[0];
                    $scope.visitSummary = results[1].data;
                }));
                
        };
        var controller = function($scope){
        	$scope.htmlLabel = function(label){
        		return $sce.trustAsHtml(label)
        	}
        }
        return {
            restrict: 'E',
            link: link,
            controller : controller,
            template: '<ng-include src="contentUrl"/>'
        }
    }]);