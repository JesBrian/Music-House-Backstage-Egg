'use strict';

const { Service } = require('egg');

class HomeService extends Service {
  async indexA() {
    return '666';
  }
}

module.exports = HomeService;
