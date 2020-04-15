const serverName = '/activity/';

const getServerApi = (api) => `${serverName}${api}`
//主页数据列表
export const QueryAllMessages = getServerApi('personRecommendUser/personIndexList');
