/**
 * Redux and React-Redux are two different things.
 * React Redux is a library that makes it easy to use Redux with React.
 * 
 * Step 1 - Create a Store. (1 Store per App)
 * Step 2 - We call features as Slice. We keep it inside Features Folder.
 * Step 3 - Now to create slice, we have createSlice().
 *          We need three things to create slice
 *              $ name, initialState and reducers
 * Step 4 - Reducers is an object. we can add key-function pairs. (You can also give reference)
 *              $ In reducers, you will get access to STATE and ACTION
 *              $ STATE - Gives you updated value from store
 *              $ ACTION - Gives you action.payload
 * Step 5 - Once finished we need to do two exports 
 *              1. All Individual Reducers (Need in individual component)
 *              2. Main Source Reducer (Need in store)
 * Step 6 - Define Reducer in Store         
 * Step 7 - If you want to send value to Store. 
 *               $ You need to use useDispatch()
 *               $ Import reducer and then give your value through useDispatch()
 * Step 8 - If you want to receive value from Store. You need to use useSelector()
 *               $ In useSelector(), you will get access to STATE via callback.
 * 
 */