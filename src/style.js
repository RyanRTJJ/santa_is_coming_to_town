import styled from 'styled-components';

// The "browser window"
export const BackgroundContainer = styled.section`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;

    padding: auto;

    background-color: #d1d1d1;
`;

// The pink card
export const WishListContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 400px;
    height: 540px;
    border-radius: 10px;
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,1);

    background-color: #fcc0cb;
`;

// An invisible container to align all wishlist items vertically
export const InnerScreenContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 300px;
    height: 100%;
`;

// The white box
export const ListContainer = styled.section`
    display: flex;
    flex-direction: column;

    width: calc(100% - 10px);
    height: 250px;
    overflow-y: scroll;
    padding: 5px;
    border-style: solid;
    border-width: 1px;
    border-radius: 3px;
    border-color: black;

    background-color: white;
`;

// An item in the white box
export const ListItem = styled.section`
    display: flex;
    background-color: white;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;

    &:hover {
        cursor: pointer;
    }
`;

export const TitleText = styled.section`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
`;

// Wrap new wish input field in a form for default "ENTER" / "RETURN" key behavior.
export const NewItemFormWrapper = styled.form`
    width: 100%;
`;

// New wish input field
export const NewItemInputField = styled.input`
    display: flex;

    width: calc(100% - 20px);
    height: 30px;
    padding: auto;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 15px;
    margin-bottom: 15px;    
    border-style: solid;
    border-width: 1px;
    border-radius: 3px;
    border-color: black;

    background-color: white;
`;

// Standard green button. Sizing can be over-written in inline styles.
export const GreenButton = styled.button`
    height: 40px;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    border-style: none;
    border-radius: 3px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);

    background-color: #92ec93;

    font-weight: bold;
    font-size: 14px;

    &:hover {
        cursor: pointer;
    }
    &:focus {
        outline: none;
    }
`;