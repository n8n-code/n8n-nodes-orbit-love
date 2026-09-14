import type { INodeProperties } from 'n8n-workflow';

export const reportsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Reports"
					]
				}
			},
			"options": [
				{
					"name": "GET Reports",
					"value": "GET Reports",
					"action": "Get a workspace stats",
					"description": "Get a workspace stats",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"workspace_slug\"]}}/reports"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /{workspace_slug}/reports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports"
					],
					"operation": [
						"GET Reports"
					]
				}
			}
		},
		{
			"displayName": "Workspace Slug",
			"name": "workspace_slug",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports"
					],
					"operation": [
						"GET Reports"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "start_date",
			"description": "Filter activities after this date. Format: YYYY-MM-DD.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "start_date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports"
					],
					"operation": [
						"GET Reports"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "end_date",
			"description": "Filter activities before this date. Format: YYYY-MM-DD.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "end_date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports"
					],
					"operation": [
						"GET Reports"
					]
				}
			}
		},
		{
			"displayName": "Relative",
			"name": "relative",
			"description": "Relative timeframes. Format: this_<integer>_<period>, with period in [days, weeks, months, years]. For example, this_30_days.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relative",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports"
					],
					"operation": [
						"GET Reports"
					]
				}
			}
		},
		{
			"displayName": "Properties",
			"name": "properties",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "properties",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports"
					],
					"operation": [
						"GET Reports"
					]
				}
			}
		},
		{
			"displayName": "Activity Type",
			"name": "activity_type",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "activity_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports"
					],
					"operation": [
						"GET Reports"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"description": "Deprecated in favor of the activity_type parameter.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports"
					],
					"operation": [
						"GET Reports"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearer",
			"type": "string",
			"default": "",
			"description": "Provide a Authorization header with format 'Bearer <api_key>'. This is the recommended approach. Make sure to include the 'Bearer' part in the text box here.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports"
					],
					"operation": [
						"GET Reports"
					]
				}
			}
		},
];
