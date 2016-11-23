import * as React from 'react';
export class Layout extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    static propTypes = {
        title: React.PropTypes.string
    }
    render() {
        return (
            <html>
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                    <title>{this.props.title}</title>
                </head>
                <body>
                    {this.props.children}
                </body>
            </html>
        );
    }
}