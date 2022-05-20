const RelationshipTableExplorer = require("../utils/db_interection/RelationshipExplorer");

const handleRelationship = async (req, res) => {
  console.log(req.body);
  const { following, followers, user_id } = req.body;
  const handler = new RelationshipTableExplorer();
  handler.userId = user_id;
  let target;

  const setListState = async (isFollowing) => {
    isFollowing ? (target = following) : (target = followers);
    handler.userId = user_id;
    const oldList = isFollowing
      ? [...(await handler.getFollowing())]
      : [...(await handler.getFollowers())];
    const newList = oldList[0] === "" ? [target[0]] : [...oldList, target[0]];
    isFollowing ? (handler.following = newList) : (handler.followers = newList);
  };
  await setListState(following ? true : false);
  const result = await handler.updateRelationship();
  res.json(result.rows[0]);
};

module.exports = { handleRelationship };
