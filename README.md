# Retailer Google Cloud Platform API in NodeJS (Demo for AppEngine and Datastore)

This applications shows how to utilize Google Cloud Platform for building Web API in NodeJs, AppEngine and Datastore

* [Web API - Customer Management](#Web-API---Customer-Management)
* [Setup](#setup)
* [Local Run](#local-run)
* [Deploying to App Engine (Standard)](#deploying-to-app-engine-standard)

## Web Api - (Customer Management)

* Create - POST **/customers** - creates a customer in the datastore with fake name and email and HATEOAS constraint with a link to self
* Get All - GET **/customers** - gets all created customers from the datastore
* Get By ID - GET **/customers/{id}** - gets single customer by its id from the datastore

## Setup

1.  Create credential at APIs & Services -> Credentials -> Create Credentials -> Service Account Key -> Select your App Engine Project -> Select JSON -> Create

2.  Download the file and save to a secure location

3.  Set the environmental variable -> SET GOOGLE_APPLICATION_CREDENTIALS=<PATH/FILE.json>

4.  Install dependencies:

        npm install

## Local Run

    npm start

## Deploying to App Engine (Standard)

    gcloud projects list

    gcloud app create --project=<YOUR_PROJECT_ID>

    gcloud config set project <YOUR_PROJECT_ID>

	gcloud app deploy 

    gcloud app browse