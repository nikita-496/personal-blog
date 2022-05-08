function paginatedResults(model) {
  return (req, res, next) => {
    const results = {};

    if (!req.query.page && !req.query.limit) {
      results.results = model;
      res.paginatedResults = results;
      next();
    }
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    console.log(model);
    if (endIndex < model.length) {
      results.next = {
        page: page + 1,
        limit,
      };
    }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit,
      };
    }

    results.results = model.slice(startIndex, endIndex);
    res.paginatedResults = results;
    console.log((res.paginatedResults = results));
    next();
  };
}

module.exports = paginatedResults;
