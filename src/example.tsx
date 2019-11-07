import React from 'react';

export const Example: React.FC<{ greeting: string; }> = (props: { greeting: string; }) => {
    return (<div>
        {props.greeting}
    </div>);
}
