import styled from "styled-components";
// https://www.sarasoueidan.com/blog/inclusively-hiding-and-styling-checkboxes-and-radio-buttons/

export default function NumberSelect({ selected, onChange }) {
  const timeOptions = [1, 3, 5, 10, 15];

  return (
    <Wrapper>
      <NumberList>
        {timeOptions.map((o, i) => (
          <Option
            key={i}
            className={`${selected === o ? "selected" : ""}`}
            onClick={(e) => onChange(o)}
          >
            <HiddenInput
              id={o}
              type="radio"
              name="duration"
              value={o}
              checked={selected === o}
            />
            <label for={o}>{o}</label>
          </Option>
        ))}
      </NumberList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin: var(--spacing) 0px;
`;

const NumberList = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  gap: var(--spacing);
`;

const Option = styled.div`
  position: relative;
  font-size: 2rem;
  width: 2em;
  background-color: var(--color-darker);
  border-radius: var(--radius);
  padding: var(--spacing) calc(var(--spacing) * 2);

  // since we hid the radio buttons, add back in
  // visual cue for in focus selection
  &:focus-within {
    outline: 2px solid #fefefe;
  }
`;

const HiddenInput = styled.input`
  position: absolute;
  width: 1em;
  height: 1em;
  top: 1em;

  // toggle this to show/hide
  opacity: 0;

  & + label {
    color: grey;
  }

  &:checked + label {
    color: white;
  }
`;
