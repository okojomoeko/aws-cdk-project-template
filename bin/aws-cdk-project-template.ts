#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwsCdkProjectTemplateStack } from '../lib/aws-cdk-project-template-stack';

const app = new cdk.App();
new AwsCdkProjectTemplateStack(app, 'AwsCdkProjectTemplateStack');
