import request from "../utils/request"

// router.get("/address/get_user_address_list", isAuth.verifyToken, userController.getUserAddressList);

export const getAllAddress = async() => {
    const response = await request.get("api/v1/users/address/get_user_address_list");

    return response.data;
}