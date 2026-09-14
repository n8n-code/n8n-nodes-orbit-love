import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class OrbitLoveApi implements ICredentialType {
        name = 'N8nDevOrbitLoveApi';

        displayName = 'Orbit Love API';

        icon: Icon = { light: 'file:../nodes/OrbitLove/orbit-love.png', dark: 'file:../nodes/OrbitLove/orbit-love.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://app.orbit.love/api/v1',
                        required: true,
                        placeholder: 'https://app.orbit.love/api/v1',
                        description: 'The base URL of your Orbit Love API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'api_key': '={{$credentials.apiKey}}',
                        },
                },
        };


}
