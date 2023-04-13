# salable-errors

# Salable Errors

The Salable Errors allows you to properly return HTTPException classes for specific error messages in response to HTTP requests to improve error handling in an application.

## Getting Started

<hr>

### Installation

> with npm

```bash
npm install @salable/errors
```

> with yarn

```bash
yarn add @salable/errors
```

### Using HTTPClientException - client errors

> With description

```ts
import {HTTPClientException} from '@salable/errors';
const errorPayload = {
  description:
    'Your changes were saved, but we could not connect your account due to a technical issue on our end. Please try connecting again.',
};
throw new HTTPClientException('NOT_FOUND', 'Unable to connect to account', errorPayload);
// Expected return
{
  statusCode: 404;
  message: 'Unable to connect to account';
  description: 'Your changes were saved, but we could not connect your account due to a technical issue on our end. Please try connecting again.';
}
```

> With NO description

```ts
import {HTTPClientException} from '@salable/errors';
throw new HTTPClientException('NOT_FOUND', 'Unable to connect to account');
// Expected return
{
  statusCode: 404;
  message: 'Unable to connect to account';
  description: undefined;
}
```

### Using HTTPServerException - Server Errors

> With description

```ts
import {HTTPServerException} from '@salable/errors';
const errorPayload = {
  description:
    'No changes were made, but we could not connect your account due to a technical issue on our end. Please try connecting again.',
};
throw new HTTPServerException('INTERNAL_SERVER_ERROR', 'Unable to connect to network', errorPayload);
// Expected return
{
  statusCode: 500;
  message: 'Unable to connect to account';
  description: 'No changes were made, but we could not connect your account due to a technical issue on our end. Please try connecting again.';
}
```

> With NO description

```ts
import {HTTPServerException} from '@salable/errors';
throw new HTTPServerException('INTERNAL_SERVER_ERROR', 'Unable to connect to network');
// Expected return
{
  statusCode: 500;
  message: 'Unable to connect to account';
  description: undefined;
}
```
