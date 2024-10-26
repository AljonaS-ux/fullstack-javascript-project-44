#!/usr/bin/env node

console.log("Welcome to the Brain Games!");

import readlineSync from 'readline-sync';
import { greetUser } from '../src/cli.js';
greetUser();
