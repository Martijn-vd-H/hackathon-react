import React from 'react';

export interface IExampleClassProps {
    greeting: string;
}

export class ExampleClass extends React.Component<IExampleClassProps> {
    constructor(props: IExampleClassProps) {
        super(props);
    }

    render() {
        return(<div>
            {this.props.greeting}
        </div>)
    }
}
