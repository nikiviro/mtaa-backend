module.exports.routes = {
  '/': 'SiteController.index',

  'get /items': 'ItemController.find',
  'get /items/:id': 'ItemController.findOne',
  'post /items': 'ItemController.create',
  'put /items': 'ItemController.update',
  'delete /items/:id': 'ItemController.destroy'
};
