#!/bin/bash

# Create base directories for docs (Chinese - default locale)
mkdir -p docs/{ai,api,develop,faq,guide,migration,principle,pro}
mkdir -p docs/guide/{basic-tutorial,cli,data-sources,deps,environment,installation,monitoring,node,notifications,permissions,plugin,project,schedule,spider,task,token,user}
mkdir -p docs/principle/{architecture,core-modules,database,filesystem,frontend,node}
mkdir -p docs/develop/plugins

# Create i18n structure for English
mkdir -p i18n/en/docusaurus-plugin-content-docs/current/{ai,api,develop,faq,guide,migration,principle,pro}
mkdir -p i18n/en/docusaurus-plugin-content-docs/current/guide/{basic-tutorial,cli,data-sources,deps,environment,installation,monitoring,node,notifications,permissions,plugin,project,schedule,spider,task,token,user}
mkdir -p i18n/en/docusaurus-plugin-content-docs/current/principle/{architecture,core-modules,database,filesystem,frontend,node}
mkdir -p i18n/en/docusaurus-plugin-content-docs/current/develop/plugins

# Create static directories for images
mkdir -p static/img