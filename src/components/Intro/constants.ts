export const feature = `
Feature: Greeting

  Scenario: Say hello
    Given a greeter is present
    When the greeter says hello
    Then I should have heard "hello"
`

export const steps = `
import { Given, When, Then, world } from '@cucumber/cucumber'
import assert from 'node:assert'
import { Greeter } from '../lib/Greeter.js'

Given('a greeter is present',
    () => world.greeter = new Greeter())

When('the greeter says hello',
    () => world.whatIHeard = world.greeter.sayHello())

Then('I should have heard {string}',
    expected => assert.equal(world.whatIHeard, expected))
`

export const demoDuration = 1_000