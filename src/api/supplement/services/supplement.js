'use strict';

/**
 * supplement service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::supplement.supplement');
