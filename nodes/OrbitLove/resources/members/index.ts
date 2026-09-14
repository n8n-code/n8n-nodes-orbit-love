import type { INodeProperties } from 'n8n-workflow';

export const membersDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					]
				}
			},
			"options": [
				{
					"name": "GET Members",
					"value": "GET Members",
					"action": "List members in a workspace",
					"description": "List members in a workspace",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"workspace_slug\"]}}/members"
						}
					}
				},
				{
					"name": "POST Members",
					"value": "POST Members",
					"action": "Create or update a member",
					"description": "This method is useful when you know a member's identity in another system and want to create or update the corresponding Orbit member. Identities can be specified in the identity object or member attributes like member.github. If no member exists, a new member will be created and linked to any provided identities.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/{{$parameter[\"workspace_slug\"]}}/members"
						}
					}
				},
				{
					"name": "GET Members Find",
					"value": "GET Members Find",
					"action": "Find a member by an identity",
					"description": "Provide a source and one of username/uid/email params to return a member with that identity, if one exists. Common values for source include github, twitter, and email.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"workspace_slug\"]}}/members/find"
						}
					}
				},
				{
					"name": "DELETE Members",
					"value": "DELETE Members",
					"action": "Delete a member",
					"description": "Delete a member",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/{{$parameter[\"workspace_slug\"]}}/members/{{$parameter[\"member_slug\"]}}"
						}
					}
				},
				{
					"name": "PUT Members",
					"value": "PUT Members",
					"action": "Update a member",
					"description": "Update a member",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/{{$parameter[\"workspace_slug\"]}}/members/{{$parameter[\"member_slug\"]}}"
						}
					}
				},
				{
					"name": "DELETE Members Identities",
					"value": "DELETE Members Identities",
					"action": "Remove identity from a member",
					"description": "Remove identity from a member",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/{{$parameter[\"workspace_slug\"]}}/members/{{$parameter[\"member_slug\"]}}/identities"
						}
					}
				},
				{
					"name": "POST Members Identities",
					"value": "POST Members Identities",
					"action": "Add identity to a member",
					"description": "Add identity to a member",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/{{$parameter[\"workspace_slug\"]}}/members/{{$parameter[\"member_slug\"]}}/identities"
						}
					}
				},
				{
					"name": "GET Organizations Members",
					"value": "GET Organizations Members",
					"action": "List members in an organization",
					"description": "List members in an organization",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"workspace_slug\"]}}/organizations/{{$parameter[\"organization_id\"]}}/members"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /{workspace_slug}/members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Members"
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
						"Members"
					],
					"operation": [
						"GET Members"
					]
				}
			}
		},
		{
			"displayName": "Affiliation",
			"name": "affiliation",
			"default": "member",
			"type": "options",
			"options": [
				{
					"name": "Member",
					"value": "member"
				},
				{
					"name": "Teammate",
					"value": "teammate"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "affiliation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Members"
					]
				}
			}
		},
		{
			"displayName": "Member Tags",
			"name": "member_tags",
			"description": "The list of tags to filter against. Separate tags with `,` to do an intersection (AND), or with `|` to do a union (OR)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "member_tags",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Members"
					]
				}
			}
		},
		{
			"displayName": "Orbit",
			"name": "orbit",
			"description": "The list of orbit levels to filter against. Accepted values are 1, 2, 3, 4, n. In the request, a format like `23` would include levels 2 and 3. `n` is for members with no orbit level.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "orbit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Members"
					]
				}
			}
		},
		{
			"displayName": "Activity Type",
			"name": "activity_type",
			"description": "Comma separated list of activity types",
			"default": "discourse:topic:created",
			"type": "options",
			"options": [
				{
					"name": "Discourse Topic Created",
					"value": "discourse:topic:created"
				},
				{
					"name": "Discourse Post Liked",
					"value": "discourse:post:liked"
				},
				{
					"name": "Discourse User Created",
					"value": "discourse:user:created"
				},
				{
					"name": "Discourse Post Created",
					"value": "discourse:post:created"
				},
				{
					"name": "Slack Message Sent",
					"value": "slack:message:sent"
				},
				{
					"name": "Slack Thread Replied",
					"value": "slack:thread:replied"
				},
				{
					"name": "Slack Channel Joined",
					"value": "slack:channel:joined"
				},
				{
					"name": "Note Created",
					"value": "note:created"
				},
				{
					"name": "Post Created",
					"value": "post:created"
				},
				{
					"name": "Issues Opened",
					"value": "issues:opened"
				},
				{
					"name": "Discord Message Sent",
					"value": "discord:message:sent"
				},
				{
					"name": "Issue Comment Created",
					"value": "issue_comment:created"
				},
				{
					"name": "Discord Thread Replied",
					"value": "discord:thread:replied"
				},
				{
					"name": "Custom Happened",
					"value": "custom:happened"
				},
				{
					"name": "Dev Comment",
					"value": "dev:comment"
				},
				{
					"name": "Discord Message Replied",
					"value": "discord:message:replied"
				},
				{
					"name": "Discord Server Joined",
					"value": "discord:server:joined"
				},
				{
					"name": "Insided Conversation Started",
					"value": "insided:conversation:started"
				},
				{
					"name": "Fork Created",
					"value": "fork:created"
				},
				{
					"name": "Insided Idea Replied",
					"value": "insided:idea:replied"
				},
				{
					"name": "Insided Article Created",
					"value": "insided:article:created"
				},
				{
					"name": "Discussions Discussion Created",
					"value": "discussions:discussion_created"
				},
				{
					"name": "Insided Question Replied",
					"value": "insided:question:replied"
				},
				{
					"name": "Discussions Comment",
					"value": "discussions:comment"
				},
				{
					"name": "Discussions Reply",
					"value": "discussions:reply"
				},
				{
					"name": "Insided Article Replied",
					"value": "insided:article:replied"
				},
				{
					"name": "Insided Question Asked",
					"value": "insided:question:asked"
				},
				{
					"name": "Insided Conversation Replied",
					"value": "insided:conversation:replied"
				},
				{
					"name": "Insided Idea Submitted",
					"value": "insided:idea:submitted"
				},
				{
					"name": "Reddit Comment",
					"value": "reddit:comment"
				},
				{
					"name": "Reddit Post",
					"value": "reddit:post"
				},
				{
					"name": "Stackoverflow Answer",
					"value": "stackoverflow:answer"
				},
				{
					"name": "Linkedin Comment",
					"value": "linkedin:comment"
				},
				{
					"name": "Pull Requests Opened",
					"value": "pull_requests:opened"
				},
				{
					"name": "Pull Requests Merged",
					"value": "pull_requests:merged"
				},
				{
					"name": "Star Created",
					"value": "star:created"
				},
				{
					"name": "Stackoverflow Question",
					"value": "stackoverflow:question"
				},
				{
					"name": "Tweet Sent",
					"value": "tweet:sent"
				},
				{
					"name": "Twitter Followed",
					"value": "twitter:followed"
				},
				{
					"name": "Youtube Comment",
					"value": "youtube:comment"
				}
			],
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
						"Members"
					],
					"operation": [
						"GET Members"
					]
				}
			}
		},
		{
			"displayName": "Identity",
			"name": "identity",
			"default": "github",
			"type": "options",
			"options": [
				{
					"name": "Github",
					"value": "github"
				},
				{
					"name": "Twitter",
					"value": "twitter"
				},
				{
					"name": "Email",
					"value": "email"
				},
				{
					"name": "Discourse",
					"value": "discourse"
				},
				{
					"name": "Linkedin",
					"value": "linkedin"
				},
				{
					"name": "Devto",
					"value": "devto"
				},
				{
					"name": "Slack",
					"value": "slack"
				},
				{
					"name": "Discord",
					"value": "discord"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "identity",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Members"
					]
				}
			}
		},
		{
			"displayName": "Company",
			"name": "company%5B%5D",
			"description": "Comma separated list of companies. The union (OR) of companies is applied.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "company[]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Members"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title%5B%5D",
			"description": "Comma separated list of job titles. The union (OR) of job titles is applied.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "title[]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Members"
					]
				}
			}
		},
		{
			"displayName": "Regions",
			"name": "regions%5B%5D",
			"description": "Comma separated list of regions. The union (OR) of regions is applied.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "regions[]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Members"
					]
				}
			}
		},
		{
			"displayName": "Countries",
			"name": "countries%5B%5D",
			"description": "Comma separated list of countries. The union (OR) of countries is applied.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "countries[]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Members"
					]
				}
			}
		},
		{
			"displayName": "Cities",
			"name": "cities%5B%5D",
			"description": "Comma separated list of cities. The union (OR) of cities is applied.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cities[]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Members"
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
						"Members"
					],
					"operation": [
						"GET Members"
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
						"Members"
					],
					"operation": [
						"GET Members"
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
						"Members"
					],
					"operation": [
						"GET Members"
					]
				}
			}
		},
		{
			"displayName": "Query",
			"name": "query",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "query",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Members"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Members"
					]
				}
			}
		},
		{
			"displayName": "Direction",
			"name": "direction",
			"default": "ASC",
			"type": "options",
			"options": [
				{
					"name": "ASC",
					"value": "ASC"
				},
				{
					"name": "DESC",
					"value": "DESC"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "direction",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Members"
					]
				}
			}
		},
		{
			"displayName": "Items",
			"name": "items",
			"default": "10",
			"type": "options",
			"options": [
				{
					"name": "10",
					"value": "10"
				},
				{
					"name": "50",
					"value": "50"
				},
				{
					"name": "100",
					"value": "100"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "items",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Members"
					]
				}
			}
		},
		{
			"displayName": "Activities Count Min",
			"name": "activities_count_min",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "activities_count_min",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Members"
					]
				}
			}
		},
		{
			"displayName": "Activities Count Max",
			"name": "activities_count_max",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "activities_count_max",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Members"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"default": "activities_count",
			"type": "options",
			"options": [
				{
					"name": "Activities Count",
					"value": "activities_count"
				},
				{
					"name": "Company",
					"value": "company"
				},
				{
					"name": "Created At",
					"value": "created_at"
				},
				{
					"name": "First Activity",
					"value": "first_activity"
				},
				{
					"name": "Github Followers",
					"value": "github_followers"
				},
				{
					"name": "ID",
					"value": "id"
				},
				{
					"name": "Last Activity",
					"value": "last_activity"
				},
				{
					"name": "Location",
					"value": "location"
				},
				{
					"name": "Love",
					"value": "love"
				},
				{
					"name": "Name",
					"value": "name"
				},
				{
					"name": "Orbit",
					"value": "orbit"
				},
				{
					"name": "Reach",
					"value": "reach"
				},
				{
					"name": "Title",
					"value": "title"
				},
				{
					"name": "Twitter Followers",
					"value": "twitter_followers"
				},
				{
					"name": "Updated At",
					"value": "updated_at"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Members"
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
						"Members"
					],
					"operation": [
						"GET Members"
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
						"Members"
					],
					"operation": [
						"GET Members"
					]
				}
			}
		},
		{
			"displayName": "POST /{workspace_slug}/members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"POST Members"
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
						"Members"
					],
					"operation": [
						"POST Members"
					]
				}
			}
		},
		{
			"displayName": "Identity",
			"name": "identity",
			"type": "json",
			"default": "{}",
			"description": "Represents an email address, a profile on networks like github and twitter, or a record in another system.",
			"routing": {
				"send": {
					"property": "identity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"POST Members"
					]
				}
			}
		},
		{
			"displayName": "Member",
			"name": "member",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "member",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"POST Members"
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
						"Members"
					],
					"operation": [
						"POST Members"
					]
				}
			}
		},
		{
			"displayName": "GET /{workspace_slug}/members/find",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Members Find"
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
						"Members"
					],
					"operation": [
						"GET Members Find"
					]
				}
			}
		},
		{
			"displayName": "Source",
			"name": "source",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "source",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Members Find"
					]
				}
			}
		},
		{
			"displayName": "Source Host",
			"name": "source_host",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "source_host",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Members Find"
					]
				}
			}
		},
		{
			"displayName": "Uid",
			"name": "uid",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "uid",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Members Find"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "username",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "username",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Members Find"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Members Find"
					]
				}
			}
		},
		{
			"displayName": "Github",
			"name": "github",
			"description": "Deprecated, please use source=github and username=<username> instead",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "github",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Members Find"
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
						"Members"
					],
					"operation": [
						"GET Members Find"
					]
				}
			}
		},
		{
			"displayName": "DELETE /{workspace_slug}/members/{member_slug}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"DELETE Members"
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
						"Members"
					],
					"operation": [
						"DELETE Members"
					]
				}
			}
		},
		{
			"displayName": "Member Slug",
			"name": "member_slug",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"DELETE Members"
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
						"Members"
					],
					"operation": [
						"DELETE Members"
					]
				}
			}
		},
		{
			"displayName": "PUT /{workspace_slug}/members/{member_slug}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"PUT Members"
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
						"Members"
					],
					"operation": [
						"PUT Members"
					]
				}
			}
		},
		{
			"displayName": "Member Slug",
			"name": "member_slug",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"PUT Members"
					]
				}
			}
		},
		{
			"displayName": "Bio",
			"name": "bio",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "bio",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"PUT Members"
					]
				}
			}
		},
		{
			"displayName": "Birthday",
			"name": "birthday",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "birthday",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"PUT Members"
					]
				}
			}
		},
		{
			"displayName": "Company",
			"name": "company",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "company",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"PUT Members"
					]
				}
			}
		},
		{
			"displayName": "Devto",
			"name": "devto",
			"type": "string",
			"default": "",
			"description": "The member's DEV username",
			"routing": {
				"send": {
					"property": "devto",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"PUT Members"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "",
			"description": "The member's email",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"PUT Members"
					]
				}
			}
		},
		{
			"displayName": "Github",
			"name": "github",
			"type": "string",
			"default": "",
			"description": "The member's GitHub username",
			"routing": {
				"send": {
					"property": "github",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"PUT Members"
					]
				}
			}
		},
		{
			"displayName": "Linkedin",
			"name": "linkedin",
			"type": "string",
			"default": "",
			"description": "The member's LinkedIn username, without the in/ or pub/",
			"routing": {
				"send": {
					"property": "linkedin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"PUT Members"
					]
				}
			}
		},
		{
			"displayName": "Location",
			"name": "location",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "location",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"PUT Members"
					]
				}
			}
		},
		{
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
						"Members"
					],
					"operation": [
						"PUT Members"
					]
				}
			}
		},
		{
			"displayName": "Pronouns",
			"name": "pronouns",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "pronouns",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"PUT Members"
					]
				}
			}
		},
		{
			"displayName": "Shipping Address",
			"name": "shipping_address",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "shipping_address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"PUT Members"
					]
				}
			}
		},
		{
			"displayName": "Slug",
			"name": "slug",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "slug",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"PUT Members"
					]
				}
			}
		},
		{
			"displayName": "Tag List",
			"name": "tag_list",
			"type": "string",
			"default": "",
			"description": "Deprecated: Please use the tags attribute instead",
			"routing": {
				"send": {
					"property": "tag_list",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"PUT Members"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "string",
			"default": "",
			"description": "Replaces all tags for the member; comma-separated string or array",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"PUT Members"
					]
				}
			}
		},
		{
			"displayName": "Tags To Add",
			"name": "tags_to_add",
			"type": "string",
			"default": "",
			"description": "Adds tags to member; comma-separated string or array",
			"routing": {
				"send": {
					"property": "tags_to_add",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"PUT Members"
					]
				}
			}
		},
		{
			"displayName": "Teammate",
			"name": "teammate",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "teammate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"PUT Members"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"PUT Members"
					]
				}
			}
		},
		{
			"displayName": "Tshirt",
			"name": "tshirt",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "tshirt",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"PUT Members"
					]
				}
			}
		},
		{
			"displayName": "Twitter",
			"name": "twitter",
			"type": "string",
			"default": "",
			"description": "The member's Twitter username",
			"routing": {
				"send": {
					"property": "twitter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"PUT Members"
					]
				}
			}
		},
		{
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
						"Members"
					],
					"operation": [
						"PUT Members"
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
						"Members"
					],
					"operation": [
						"PUT Members"
					]
				}
			}
		},
		{
			"displayName": "DELETE /{workspace_slug}/members/{member_slug}/identities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"DELETE Members Identities"
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
						"Members"
					],
					"operation": [
						"DELETE Members Identities"
					]
				}
			}
		},
		{
			"displayName": "Member Slug",
			"name": "member_slug",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"DELETE Members Identities"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "",
			"description": "The email of the person in the source system",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"DELETE Members Identities"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "The name of the person in the source system",
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
						"Members"
					],
					"operation": [
						"DELETE Members Identities"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Source",
			"name": "source",
			"type": "string",
			"default": "",
			"description": "The type of source: known values include github, twitter, discourse, email, linkedin, devto. Custom values can also be used",
			"routing": {
				"send": {
					"property": "source",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"DELETE Members Identities"
					]
				}
			}
		},
		{
			"displayName": "Source Host",
			"name": "source_host",
			"type": "string",
			"default": "",
			"description": "Specifies the location of the source, such as the host of a Discourse instance",
			"routing": {
				"send": {
					"property": "source_host",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"DELETE Members Identities"
					]
				}
			}
		},
		{
			"displayName": "Uid",
			"name": "uid",
			"type": "string",
			"default": "",
			"description": "The uid of the person in the source system",
			"routing": {
				"send": {
					"property": "uid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"DELETE Members Identities"
					]
				}
			}
		},
		{
			"displayName": "URL",
			"name": "url",
			"type": "string",
			"default": "",
			"description": "For custom identities, an optional link to the profile on the source system",
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
						"Members"
					],
					"operation": [
						"DELETE Members Identities"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "username",
			"type": "string",
			"default": "",
			"description": "The username of the person in the source system",
			"routing": {
				"send": {
					"property": "username",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"DELETE Members Identities"
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
						"Members"
					],
					"operation": [
						"DELETE Members Identities"
					]
				}
			}
		},
		{
			"displayName": "POST /{workspace_slug}/members/{member_slug}/identities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"POST Members Identities"
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
						"Members"
					],
					"operation": [
						"POST Members Identities"
					]
				}
			}
		},
		{
			"displayName": "Member Slug",
			"name": "member_slug",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"POST Members Identities"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "",
			"description": "The email of the person in the source system",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"POST Members Identities"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "The name of the person in the source system",
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
						"Members"
					],
					"operation": [
						"POST Members Identities"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Source",
			"name": "source",
			"type": "string",
			"default": "",
			"description": "The type of source: known values include github, twitter, discourse, email, linkedin, devto. Custom values can also be used",
			"routing": {
				"send": {
					"property": "source",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"POST Members Identities"
					]
				}
			}
		},
		{
			"displayName": "Source Host",
			"name": "source_host",
			"type": "string",
			"default": "",
			"description": "Specifies the location of the source, such as the host of a Discourse instance",
			"routing": {
				"send": {
					"property": "source_host",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"POST Members Identities"
					]
				}
			}
		},
		{
			"displayName": "Uid",
			"name": "uid",
			"type": "string",
			"default": "",
			"description": "The uid of the person in the source system",
			"routing": {
				"send": {
					"property": "uid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"POST Members Identities"
					]
				}
			}
		},
		{
			"displayName": "URL",
			"name": "url",
			"type": "string",
			"default": "",
			"description": "For custom identities, an optional link to the profile on the source system",
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
						"Members"
					],
					"operation": [
						"POST Members Identities"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "username",
			"type": "string",
			"default": "",
			"description": "The username of the person in the source system",
			"routing": {
				"send": {
					"property": "username",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"POST Members Identities"
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
						"Members"
					],
					"operation": [
						"POST Members Identities"
					]
				}
			}
		},
		{
			"displayName": "GET /{workspace_slug}/organizations/{organization_id}/members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Organizations Members"
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
						"Members"
					],
					"operation": [
						"GET Organizations Members"
					]
				}
			}
		},
		{
			"displayName": "Organization ID",
			"name": "organization_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Organizations Members"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Organizations Members"
					]
				}
			}
		},
		{
			"displayName": "Items",
			"name": "items",
			"default": "10",
			"type": "options",
			"options": [
				{
					"name": "10",
					"value": "10"
				},
				{
					"name": "50",
					"value": "50"
				},
				{
					"name": "100",
					"value": "100"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "items",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Organizations Members"
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
						"Members"
					],
					"operation": [
						"GET Organizations Members"
					]
				}
			}
		},
];
