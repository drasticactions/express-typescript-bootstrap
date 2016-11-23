import * as React from 'react';

export class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props, undefined);
        this.state = Object.assign({  }, this.props);
    }
    render() {
        return (
            <div>
                <h2>Generated!</h2>
            </div>
        );
    }
}