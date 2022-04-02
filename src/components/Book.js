import PropTypes from 'prop-types';

export default function Book(props) {
  const {
    key, title, author, category, onDelete,
  } = props;
  return (
    <div className="Lesson-Panel">
      <div>
        <span className="School-of">
          {category}
        </span>
        <span className="Title">
          {title}
        </span>
        <span className="Suzanne-Collins">
          {author}
        </span>
        <div>
          <span className="Comments">
            Comments
          </span>
          |
          <span className="Remove" onClick={() => onDelete(key)} role="button" tabIndex={0} onKeyPress={() => {}}>
            Remove
          </span>
          |
          <span className="Edit">
            Edit
          </span>
        </div>
      </div>
      <div>
        <div className="Rectangle-3">
          <svg className="Oval-2" />
        </div>
        <div className="percent-details">
          <span className="-Percent-Complete">
            100%
          </span>
          <span className="Completed Text-Style-2">
            Completed
          </span>
        </div>
      </div>
      <div>
        <span className="Current-Chapter">
          Current Chapter
        </span>
        <span className="Current-Lesson">
          Chapter 17
        </span>
        <div className="Rectangle-2">
          <span className="Update-progress">
            Update progress
          </span>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  key: PropTypes.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
