'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg' + await this.ctx.service.home.indexA();
  }
}

module.exports = HomeController;
