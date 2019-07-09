import React from 'react';
import NewPostForm from './NewPostForm';
import App from '../App';


class NewPostControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          formVisibleOnPage: false
        };
    }

    render(){
        let currentlyVisibleContent = null;
        if (this.state.formVisibleOnPage){
          currentlyVisibleContent = <NewPostForm />;
         } 
         //else {
        //   currentlyVisibleContent = <ConfirmationQuestions />;
        // }
        return (
          <div>
            {currentlyVisibleContent}
          </div>
        );
      }
    }
    
    export default NewPostControl;