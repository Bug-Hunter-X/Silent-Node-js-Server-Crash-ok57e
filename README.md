# Silent Node.js Server Crash

This repository demonstrates a common yet often overlooked issue in Node.js: silent server crashes due to unhandled exceptions.  The `server.js` file contains a simple HTTP server that, under certain conditions, can crash without logging any error messages to the console, making debugging difficult. The solution (`serverSolution.js`) demonstrates how to properly handle errors and provide informative logging to prevent this.

## Problem

The `server.js` example showcases an HTTP server that lacks comprehensive error handling.  If an exception occurs within the `requestListener` function (e.g., a failure to write to the response), the server might terminate unexpectedly without any indication in the console output. This makes it hard to identify and resolve the underlying problem.

## Solution

The `serverSolution.js` file demonstrates a more robust approach. It uses a `try...catch` block to wrap the potentially error-prone code in the `requestListener`.  This ensures that any exceptions are caught, logged to the console (with details), and, importantly, prevent the server from crashing.