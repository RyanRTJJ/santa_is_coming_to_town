import React, { useState } from 'react';
import {connect} from 'react-redux';
import {addItem, deleteItem} from './redux/actions';
import {store} from './redux/store';
import { 
    BackgroundContainer, 
    WishListContainer, 
    InnerScreenContainer, 
    TitleText, 
    ListContainer, 
    ListItem,
    NewItemFormWrapper, 
    NewItemInputField, 
    GreenButton } from './style';

//For Redux
const mapStateToProps = (state) => {
    return {
        wishList: state.wishList
    }
}

// For Redux
const mapDispatchToProps = () => {
    return {
        addItem,
        deleteItem
    }
}

const App = (props) => {
    // Local state that doesn't involve redux store.
    const [newItem, setNewItem] = useState("");

    const handleAddItem = (e) => {
        e.preventDefault();

        // Check for empty string.
        if (newItem === "" || newItem.trim() === "") {
            return;
        }

        // Check for pre-existing.
        const newItemLowerCase = newItem.toLowerCase();
        if (props.wishList.filter(item => item.itemDescription.toLowerCase() === newItemLowerCase).length > 0) {
            return;
        }

        // Unique and meaningful value. Add to wish list.
        store.dispatch(props.addItem({itemDescription: newItem}));

        // Reset local state.
        setNewItem("");
    }

    const handleDeleteItem = (itemId) => {
        store.dispatch(props.deleteItem({id: itemId}));
    }

    const handleSubmit = () => {
        if (props.wishList.length <= 0) {
            return;
        }
        alert("Wish list submitted to Santa!");
        for (const item in props.wishList) {
            // `item` in this case is a key since wishList (from store) is merely 
            // an array-like object, not an actual array.
            store.dispatch(props.deleteItem({id: props.wishList[item].id}));
        };

        // Reset local state.
        setNewItem("");
    }

    return (
        <BackgroundContainer>
            <WishListContainer>
                <InnerScreenContainer>
                    <TitleText>
                        MY WISHLIST
                    </TitleText>
                    <ListContainer>
                        {props.wishList.map(item => {
                            return (
                                <ListItem key={item.id} onClick={() => handleDeleteItem(item.id)}>
                                    {item.itemDescription}
                                </ListItem>
                            )
                        })}
                    </ListContainer>
                    <NewItemFormWrapper onSubmit={(e) => handleAddItem(e)}>
                        <NewItemInputField id="newItem" value={newItem} onChange={(e) => setNewItem(e.target.value)}/>
                    </NewItemFormWrapper>
                    <GreenButton style={{width: 120}} type="submit" onClick={(e) => handleAddItem(e)}>
                        <b>Add</b>
                    </GreenButton>
                    <GreenButton onClick={handleSubmit}>
                        Submit
                    </GreenButton>
                </InnerScreenContainer>
            </WishListContainer>
        </BackgroundContainer>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(App);