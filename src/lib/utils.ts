import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const data = {
  repaired: {
    name: 'Leah Copilot',
    version: 1,
    description: 'An AI assistant built to help developers automate workflows',
    features: [
      'streaming responses',
      'websocket support',
      'multi-tenant storage',
      'audit logs',
    ],
    config: {
      port: 8080,
      enableSSL: true,
      certPath: '/etc/ssl/certs/server.crt',
      retryPolicy: {
        maxRetries: 3,
        interval: '5s',
        backoff: 'exponential',
      },
    },
    users: [
      {
        id: 1,
        name: 'Sagar',
        roles: ['admin', 'developer'],
        active: true,
        meta: {
          lastLogin: '2025-10-05T12:00:00Z',
          preferences: {
            theme: 'dark',
            notifications: 'yes',
          },
        },
      },
      {
        id: 2,
        name: 'John',
        roles: ['viewer', 'editor'],
        active: false,
        meta: {
          lastLogin: '2025-09-29T10:00:00Z',
          preferences: {
            theme: 'light',
            notifications: 'true',
          },
        },
      },
    ],
    stats: {
      requests_today: 1532,
      errors: null,
      avg_response_time: '320ms',
      memory_usage: 0.67,
      cpu_usage: null,
    },
    plugins: ['chat', 'etl', 'monitoring', 'analytics'],
    deployment: {
      region: 'ap-southeast-2',
      replicas: 3,
      env: {
        NODE_ENV: 'production',
        DB_HOST: 'localhost',
        DB_PORT: '5432',
      },
      lastUpdated: '2025-10-06T00:00:00Z',
    },
    notes: 'Ensure all invalid patterns are detected properly',
  },
  schema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
      },
      version: {
        type: 'number',
      },
      description: {
        type: 'string',
      },
      features: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      config: {
        type: 'object',
        properties: {
          port: {
            type: 'integer',
          },
          enableSSL: {
            type: 'boolean',
          },
          certPath: {
            type: 'string',
          },
          retryPolicy: {
            type: 'object',
            properties: {
              maxRetries: {
                type: 'integer',
              },
              interval: {
                type: 'string',
              },
              backoff: {
                type: 'string',
              },
            },
            required: ['maxRetries', 'interval', 'backoff'],
          },
        },
        required: ['port', 'enableSSL', 'certPath', 'retryPolicy'],
      },
      users: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
            },
            name: {
              type: 'string',
            },
            roles: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
            active: {
              type: 'boolean',
            },
            meta: {
              type: 'object',
              properties: {
                lastLogin: {
                  type: 'string',
                  format: 'date-time',
                },
                preferences: {
                  type: 'object',
                  properties: {
                    theme: {
                      type: 'string',
                    },
                    notifications: {
                      type: 'string',
                    },
                  },
                  required: ['theme', 'notifications'],
                },
              },
              required: ['lastLogin', 'preferences'],
            },
          },
          required: ['id', 'name', 'roles', 'active', 'meta'],
        },
      },
      stats: {
        type: 'object',
        properties: {
          requests_today: {
            type: 'integer',
          },
          errors: {
            type: ['integer', 'null'],
          },
          avg_response_time: {
            type: 'string',
          },
          memory_usage: {
            type: 'number',
          },
          cpu_usage: {
            type: ['number', 'null'],
          },
        },
        required: [
          'requests_today',
          'errors',
          'avg_response_time',
          'memory_usage',
          'cpu_usage',
        ],
      },
      plugins: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      deployment: {
        type: 'object',
        properties: {
          region: {
            type: 'string',
          },
          replicas: {
            type: 'integer',
          },
          env: {
            type: 'object',
            properties: {
              NODE_ENV: {
                type: 'string',
              },
              DB_HOST: {
                type: 'string',
              },
              DB_PORT: {
                type: 'string',
              },
            },
            required: ['NODE_ENV', 'DB_HOST', 'DB_PORT'],
          },
          lastUpdated: {
            type: 'string',
            format: 'date-time',
          },
        },
        required: ['region', 'replicas', 'env', 'lastUpdated'],
      },
      notes: {
        type: 'string',
      },
    },
    required: [
      'name',
      'version',
      'description',
      'features',
      'config',
      'users',
      'stats',
      'plugins',
      'deployment',
      'notes',
    ],
  },
  explanation:
    'Several fixes were applied to make the JSON valid:\n\n1.  Added missing quotes to keys like `description` and `id`.\n2.  Replaced single quotes with double quotes for strings, such as in `certPath`.\n3.  Added missing commas between array elements in `features`, `roles`, and `plugins`.\n4.  Removed comments, which are invalid in JSON.\n5.  Corrected boolean values from `tru` to `true`.\n6.  Replaced `NaN` with `null` for the `cpu_usage` field, as NaN is not a valid JSON value. Using null indicates the absense of data in this instance.\n7.  Removed the trailing comma in the `preferences` object within the `users` array and the double comma in the `stats` object.\n8.  Ensured all values are of the correct data type, such as booleans, numbers, and strings.\n9. The `backoff` property in the `retryPolicy` object has its value wrapped in quotes.\n10. Missing commas added to the `env` object.',
};
