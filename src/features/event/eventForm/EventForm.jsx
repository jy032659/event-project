import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'

export default class EventForm extends Component {
state={title:"",
date:"",
city:"",
venue:"",
hostedBy:""
}


componentDidMount(){
  if(this.props.selectedEvent!==null){
    this.setState({
      ...this.props.selectedEvent
    })
  }
}

handleFormSubmit=(evt)=>{
  console.log('this.state.id is',this.state.id)
    evt.preventDefault();
    if(this.state.id){
this.props.updateEvent(this.state);
    }else{
      this.props.createEvent(this.state);
    }


}

handleTitleChange=(evt)=>{
    const {name,value}=evt.target
    this.setState({
     [name]:value
    })
}

    render() {
        const{cancelFormOpen}=this.props
        const {title,date,city,venue,hostedBy}=this.state;
        return (
                  <Segment>
                    <Form onSubmit={this.handleFormSubmit} autoComplete='off'>
                      <Form.Field>
                        <label>Event Title</label>
                        <input name="title" onChange={this.handleTitleChange} value={title} placeholder="First Name" />
                      </Form.Field>

                      <Form.Field>
                        <label>Event Date</label>
                        <input  name="date" onChange={this.handleTitleChange} value={date} type="date" placeholder="Event Date" />
                      </Form.Field>

                      <Form.Field>
                        <label>City</label>
                        <input name="city" onChange={this.handleTitleChange} value={city} placeholder="City event is taking place" />
                      </Form.Field>

                      <Form.Field>
                        <label>Venue</label>
                        <input name="venue" onChange={this.handleTitleChange} value={venue} placeholder="Enter the Venue of the event" />
                      </Form.Field>

                      <Form.Field>
                        <label>Hosted By</label>
                        <input name="hostedBy" onChange={this.handleTitleChange} value={hostedBy} placeholder="Enter the name of person hosting" />
                      </Form.Field>

                      <Button positive type="submit">
                        Submit
                      </Button>
                      <Button onClick={cancelFormOpen} type="button">Cancel</Button>
                    </Form>
                  </Segment>
        )
    }
}
