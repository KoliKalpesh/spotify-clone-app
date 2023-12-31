export const initialState ={
    user:null,
    playlists: [],
    playing: false,
    item:null,
    // REMOVE AFTER FINISHED DEVELOPING
    
    // token: 'BQC7HkDLyiEraQD8R-L55pKYrqqgTonmHvS3Mnj7QQqOxLLgzHSwpBybJy_-ymZ3122QsVy5LxymnctyXlJePAEskopcGNZhHe5LZD-HRF-3TfnTrCMMMxsKFroUks4qzQ19tbNzG7qLKH1lRg7UlcPKG5gNUOjoT79A-Tb8RnM4Af8XkF1ufhmM3httUo4pW2l0PLSJ_vxDljAB',
};

const reducer =(state, action) =>{
    console.log(action);

    //action -> type, [playload]-> user

    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
            
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            };
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists:action.playlists,

            };
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly:action.discover_weekly,
            };
        default:
            return state;
    }

};
export default reducer;