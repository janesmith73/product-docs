---
description: Learn the basics and structure of emnify events
---

# Getting started with events

The emnify system generates several types of events. 
These events allow you to track notable system occurrences based on behavior.

Some common use cases for events on emnify include:

- **Triggers for custom business processes** (e.g., authentication or custom usage limitations configured on the [emnify Portal](usage#emnify-portal))
- **Monitoring** (e.g., SIM or data connection lifecycles)
- **Input for custom billing systems** (i.e., updating billing configuration, processing invoices, etc.)

Events are often used as triggers for custom business processes, for monitoring, and as input for custom billing systems. 
They provide information about lifecycle transitions and configuration changes. 

## Structure 

Each event is represented by an object based on the [generic Event Object](https://cdn.emnify.net/api/doc/event.html). 

Depending on the event type, some generic properties may not apply, and some events may have additional custom fields to provide information about what happened. 

:::tip
You can find detailed information on the Event Object and its associated properties in the [Event API Reference](https://cdn.emnify.net/api/doc/event.html) in the emnify System Documentation.  
:::

### Event severity

Events are distinguished by three severity levels:

* **Info**: Expected behavior of the executed event (e.g., a device successfully attaches to a network).
* **Warn**: Problem or unusual behavior, but doesn't necessarily require immediate action (e.g., a credit card expires in 60 days).
* **Critical**: Serious issue that likely requires additional follow-up (e.g., charging for an invoice failed).

:::note API Reference 
[Event Severity Object - Event API Reference Documentation](https://cdn.emnify.net/api/doc/event.html#event-severity-object)
:::

### Event source

Every event is triggered by one of three available event sources:

- **Network**: The cellular network your device is connected to (e.g., a location is updated or purged).
- **Policy Control**: Both the emnify system and your organization can define and enforce policies, quotas, or other limitations. For instance:
  - The emnify system can block devices that exceed predefined traffic limits.
  - Your organization could configure the maximum SMS usage for devices to limit SMS traffic.
- **API**: The [emnify REST API](https://cdn.emnify.net/api/doc/index.html).

:::info
Any events triggered in the [emnify Portal](usage#emnify-portal) will show **API** as the event source. 
That's because the Portal is an interface that uses the API under the hood. 
::: 

:::note API Reference
[Event Source Object - Event API Reference Documentation](https://cdn.emnify.net/api/doc/event.html#event-source-object)
:::

### Event type

The [Event Types](event-types) page provides an overview of the specific events generated by our platform.

## Working with events

There are three main ways you can access and trigger events: 

- [Data Streamer](usage#data-streamer)
- [Event API](usage#event-api) 
- [emnify Portal](usage#emnify-portal)

More information on these systems and how they compare is available on the [Working with events](usage) page.