# Creatures of Habit 

This is a tool to help make evaluating your habits less daunting & changing them more manageable and effective.

## Installation

This app utilizes a local json server, rather than a public API. Follow [these](https://www.npmjs.com/package/json-server) instructions to install a local server on your computer. 

If you already have this setup, simply run

```bash
json-server --watch db.json
```

in your terminal when inside app's directory.

## Description

This app will prompt you to list your current daily habits and rank them according to the effort they require to maintain.
With the goal of exploring new habits and/or replacing harmful ones, the user is then given several new habit options from the local database. 

After the user has had time to review these options, they are finally prompted to create a new list comprised of current habits they'd like to keep and the new ones they chose from. This list is meant to be re-evaluated weekly for consistency.