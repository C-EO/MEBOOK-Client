const updateList = (data) => {
    return{
        type: "UPDATE_LIST",
        payload: data,
    };
};

export default updateList;
