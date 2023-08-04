import styled from 'styled-components';
export default styled.div`
    margin-top: var(--header-height);
    padding-top: 4rem;

    form {
        display: flex;
        flex-direction: column;
    }
    input.input-error,
    select.input-error {
        border-color: red;
      
    }
    .error {
        color: red;
        font-style: italic;
        font-family: var(--font-family-body);
        font-size: var(--font-size-xs);
    }

    button:disabled {
        opacity: 0.35;
    }
`;