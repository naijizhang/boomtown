import React, { Component } from 'react';
import { Form, Field, FormSpy } from 'react-final-form';
import TextField from '@material-ui/core/TextField';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import {
  updateItem,
  resetItem,
  resetImage
} from '../../redux/shareItemPreview/reducer';
import { connect } from 'react-redux';
import { Mutation } from 'react-apollo';
import validate from './helpers/validation';
import { ADD_ITEM_MUTATION } from '../../apollo/queries';
import { withRouter } from 'react-router';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloudDone from '@material-ui/icons/CloudDone';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

class ShareForm extends Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.state = {
      fileSelected: false,
      done: false,
      selectedTags: [],
      openPopup: false
    };
  }
  handlePopupOpen = () => {
    this.setState({ openPopup: true });
  };
  hangleSelectTag = event => {
    this.setState({
      selectedTags: event.target.value
    });
  };
  handleSelectFile = event => {
    this.setState({
      fileSelected: this.fileInput.current.files[0]
    });
  };
  triggerInputImage = () => {
    if (!this.state.fileSelected) {
      this.fileInput.current.click();
    } else {
      this.resetFileInput();
    }
  };
  dispatchUpdate(values, tags, updateItem) {
    if (!values.imageurl && this.state.fileSelected) {
      this.getBase64Url().then(imageurl => {
        updateItem({
          imageurl
        });
      });
    }
    updateItem({
      ...values,
      tags: this.applyTags(tags)
    });
  }
  applyTags(tags) {
    //conver an array of tag titles into array of objects
    return (
      tags &&
      tags
        .filter(t => this.state.selectedTags.indexOf(t.id) > -1)
        .map(t => ({ title: t.title, id: t.id }))
    );
  }
  getBase64Url() {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.onload = e => {
        resolve(
          `data:${this.state.fileSelected.type};base64, ${btoa(
            e.target.result
          )}`
        );
      };
      reader.readAsBinaryString(this.state.fileSelected);
    });
  }
  resetFileInput = () => {
    this.fileInput.current.value = '';
    this.props.resetImage();
    this.setState({
      fileSelected: false
    });
  };
  generateTagsText(tags, selected) {
    return tags
      .map(t => (selected.indexOf(t.id) > -1 ? t.title : false))
      .filter(e => e)
      .join(', ');
  }
  async saveItem(values, tags, addItem) {
    try {
      const newItem = {
        ...values,
        tags: this.applyTags(tags)
      };
      await addItem({ variables: { item: newItem } }).then(() =>
        this.setState({ openPopup: true })
      );
    } catch (e) {
      throw Error(e);
    }
  }
  render() {
    const { classes, tags, updateItem } = this.props;
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
      PaperProps: {
        style: {
          maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
          width: 250
        }
      }
    };
    return (
      <Mutation mutation={ADD_ITEM_MUTATION}>
        {(addItem, { data }) => (
          <div>
            <Typography
              variant="h3"
              color="secondary"
              className={classes.heading}
            >
              Share. Borrow. Prosper.
            </Typography>
            <Form
              onSubmit={values => {
                this.saveItem(values, tags, addItem);
              }}
              validate={validate}
              render={({
                handleSubmit,
                reset,
                pristine,
                invalid,
                form,
                values
              }) => (
                <form onSubmit={handleSubmit} className={classes.container}>
                  <FormSpy
                    subscription={{ values: true }}
                    component={({ values }) => {
                      if (values) {
                        this.dispatchUpdate(values, tags, updateItem);
                      }
                      return '';
                    }}
                  />
                  <div>
                    <Field
                      name="imageurl"
                      render={({ input, meta }) => (
                        <div>
                          <Button
                            variant="contained"
                            color={
                              this.state.fileSelected ? 'default' : 'primary'
                            }
                            className={classes.longItem}
                            onClick={this.triggerInputImage}
                          >
                            {this.state.fileSelected
                              ? 'RESET'
                              : 'SELECT AN IMAGE'}
                          </Button>
                          <input
                            ref={this.fileInput}
                            type="file"
                            style={{ display: 'none' }}
                            onChange={e => this.handleSelectFile(e)}
                          />
                        </div>
                      )}
                    />
                  </div>
                  <div>
                    <Field
                      name="title"
                      render={({ input, meta }) => (
                        <div>
                          <TextField
                            id="item-name"
                            label="Name your item"
                            className={classes.longItem}
                            value={input.value}
                            onChange={input.onChange}
                            margin="normal"
                          />
                          {meta.error &&
                            meta.touched && (
                              <Typography
                                color="error"
                                className={classes.errorMessage}
                              >
                                {meta.error}
                              </Typography>
                            )}
                        </div>
                      )}
                    />
                  </div>
                  <div>
                    <Field
                      name="description"
                      render={({ input, meta }) => (
                        <TextField
                          id="item-description"
                          label="Describe your item"
                          multiline
                          rows="4"
                          //defaultValue="Default Value"
                          className={classes.longItem}
                          margin="normal"
                          value={input.value}
                          onChange={input.onChange}
                        />
                      )}
                    />
                  </div>
                  <div />
                  <div>
                    <Field
                      name="tags"
                      render={({ input, meta }) => (
                        <FormControl className={classes.longItem}>
                          <InputLabel htmlFor="select-multiple-checkbox">
                            Add some tags
                          </InputLabel>
                          <Select
                            multiple
                            value={this.state.selectedTags}
                            onChange={this.hangleSelectTag}
                            input={<Input id="select-multiple-checkbox" />}
                            renderValue={selected => {
                              return this.generateTagsText(tags, selected);
                            }}
                            MenuProps={MenuProps}
                          >
                            {tags
                              ? tags.map(tag => (
                                  <MenuItem key={tag.id} value={tag.id}>
                                    <Checkbox
                                      checked={
                                        this.state.selectedTags.indexOf(
                                          tag.id
                                        ) > -1
                                      }
                                    />
                                    <ListItemText primary={tag.title} />
                                  </MenuItem>
                                ))
                              : null}
                          </Select>
                        </FormControl>
                      )}
                    />
                  </div>
                  <div />

                  <div>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.shortItem}
                      component="button"
                      type="submit"
                      disabled={pristine || invalid}
                    >
                      SHARE
                    </Button>
                    <Dialog
                      open={this.state.openPopup}
                      onClose={this.handleClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">
                        <div className={classes.donelogo}>
                          <CloudDone className={classes.cloudlogo} />{' '}
                          {' Your item was added!'}
                        </div>
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          You may add another item if you like. To add another
                          item click 'Add another item'. To view your item,
                          click 'Back to items page'.
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button
                          onClick={() => {
                            this.props.resetItem();
                            this.resetFileInput();
                            form.reset();
                            this.setState({
                              openPopup: false,
                              selectedTags: []
                            });
                          }}
                          color="primary"
                        >
                          ADD ANOTHER ITEM
                        </Button>
                        <Button
                          color="secondary"
                          autoFocus
                          component={Link}
                          to="/items"
                        >
                          BACK TO ITEMS PAGE
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </div>
                </form>
              )}
            />
          </div>
        )}
      </Mutation>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  updateItem(item) {
    dispatch(updateItem(item));
  },
  resetItem() {
    dispatch(resetItem());
  },
  resetImage() {
    dispatch(resetImage());
  }
});
ShareForm.propTypes = {
  classes: PropTypes.object.isRequired,
  tags: PropTypes.array.isRequired,
  updateItem: PropTypes.func.isRequired,
  resetImage: PropTypes.func.isRequired,
  resetItem: PropTypes.func.isRequired
};
export default connect(
  null,
  mapDispatchToProps
)(withRouter(withStyles(styles)(ShareForm)));
