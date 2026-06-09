import type { INodeProperties } from 'n8n-workflow';

export const webhooksDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					]
				}
			},
			"options": [
				{
					"name": "GET Webhooks",
					"value": "GET Webhooks",
					"action": "List webhooks in a workspace",
					"description": "List webhooks in a workspace",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"workspace_slug\"]}}/webhooks"
						}
					}
				},
				{
					"name": "POST Webhooks",
					"value": "POST Webhooks",
					"action": "Create a webhook",
					"description": "Create a webhook",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/{{$parameter[\"workspace_slug\"]}}/webhooks"
						}
					}
				},
				{
					"name": "DELETE Webhooks",
					"value": "DELETE Webhooks",
					"action": "Delete a webhook",
					"description": "Delete a webhook",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/{{$parameter[\"workspace_slug\"]}}/webhooks/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "PUT Webhooks",
					"value": "PUT Webhooks",
					"action": "Update a webhook",
					"description": "Update a webhook",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/{{$parameter[\"workspace_slug\"]}}/webhooks/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /{workspace_slug}/webhooks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"GET Webhooks"
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
						"Webhooks"
					],
					"operation": [
						"GET Webhooks"
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
						"Webhooks"
					],
					"operation": [
						"GET Webhooks"
					]
				}
			}
		},
		{
			"displayName": "POST /{workspace_slug}/webhooks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"POST Webhooks"
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
						"Webhooks"
					],
					"operation": [
						"POST Webhooks"
					]
				}
			}
		},
		{
			"displayName": "Activity Tags",
			"name": "activity_tags",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "activity_tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"POST Webhooks"
					]
				}
			}
		},
		{
			"displayName": "Activity Types",
			"name": "activity_types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "activity_types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"POST Webhooks"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Event Type",
			"name": "event_type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "event_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"POST Webhooks"
					]
				}
			}
		},
		{
			"displayName": "Member Tags",
			"name": "member_tags",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "member_tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"POST Webhooks"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"POST Webhooks"
					]
				}
			}
		},
		{
			"displayName": "Secret",
			"name": "secret",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "secret",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"POST Webhooks"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "URL",
			"name": "url",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"POST Webhooks"
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
						"Webhooks"
					],
					"operation": [
						"POST Webhooks"
					]
				}
			}
		},
		{
			"displayName": "DELETE /{workspace_slug}/webhooks/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"DELETE Webhooks"
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
						"Webhooks"
					],
					"operation": [
						"DELETE Webhooks"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"DELETE Webhooks"
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
						"Webhooks"
					],
					"operation": [
						"DELETE Webhooks"
					]
				}
			}
		},
		{
			"displayName": "PUT /{workspace_slug}/webhooks/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"PUT Webhooks"
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
						"Webhooks"
					],
					"operation": [
						"PUT Webhooks"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"PUT Webhooks"
					]
				}
			}
		},
		{
			"displayName": "Activity Tags",
			"name": "activity_tags",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "activity_tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"PUT Webhooks"
					]
				}
			}
		},
		{
			"displayName": "Activity Types",
			"name": "activity_types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "activity_types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"PUT Webhooks"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Event Type",
			"name": "event_type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "event_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"PUT Webhooks"
					]
				}
			}
		},
		{
			"displayName": "Member Tags",
			"name": "member_tags",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "member_tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"PUT Webhooks"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"PUT Webhooks"
					]
				}
			}
		},
		{
			"displayName": "Secret",
			"name": "secret",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "secret",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"PUT Webhooks"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "URL",
			"name": "url",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"PUT Webhooks"
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
						"Webhooks"
					],
					"operation": [
						"PUT Webhooks"
					]
				}
			}
		},
];
