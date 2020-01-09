/**
 * Created by lmmz on 2019/12/13.
 */

const serverName = '/activity/';

const getServerApi = (api) => `${serverName}${api}`
//主页数据列表
export const QueryAllMessages = getServerApi('personRecommendUser/personIndexList');
