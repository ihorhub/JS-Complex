const db = require('../dataBase').getInstance();

module.exports = {
    createTokenPair: (tokenPair) => {
        const OAuthModel = db.getModel('O_Auth');

        return OAuthModel.create(tokenPair);
    },

    getTokenWithUserByParams: (findObject) => {
        const OAuthModel = db.getModel('O_Auth');
        const UserModel = db.getModel('User');

        return UserModel.findOne({
            include: {
                model: OAuthModel,
                where: findObject
            }
        });
    },
    deleteToken: (accessToken) => {
        const OAuthModel = db.getModel('O_Auth');

        return OAuthModel.destroy({
            where: {access_token: accessToken}
        });
    },
    deleteTokenById: (id) => {
        const OAuthModel = db.getModel('O_Auth');

        return OAuthModel.destroy({
            where: { id }
        });
    }

};
