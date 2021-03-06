import React from 'react';
import { TimeTrackerSettings } from './TimeTrackerSettings';

export class TimeTrackerHeader extends React.Component {
    constructor(props) {
        super(props);
        this.toggleSettings = this.toggleSettings.bind(this);
        this.toggleCompletes = this.toggleCompletes.bind(this);
    }

    toggleSettings(e) {
        e.preventDefault();
        this.props.toggleSettings(!this.props.settingsForm)
    }
    toggleCompletes(e) {
        e.preventDefault();
        this.props.toggleComletes(!this.props.showCompletes)
    }

    render() {
        var default_color = {
                color: this.props.colors.defaultColor
            },
            primaryColor = {
                borderColor: this.props.colors.primaryColor
            },
            iconToggleComletes = {};

        if(this.props.showCompletes) {
            iconToggleComletes = <svg className="icon icon-eye" style={default_color}><use xlinkHref="#icon-eye"></use></svg>;
        } else {
            iconToggleComletes = <svg className="icon icon-eye-hidden" style={default_color}><use xlinkHref="#icon-eye-hidden"></use></svg>;
        }
        return (
            <header className='timetracker__header' style={primaryColor}>
                {/*<a href="#" className="timetracker__header-toggle_completes" onClick={this.toggleCompletes}>*/}
                    {/*{iconToggleComletes}*/}
                {/*</a>*/}
                <h1 className="timetracker__title" style={default_color}>{this.props.heading} <span>{this.props.settingsForm ? '(настройки)' : ''}</span></h1>
                <a href="#" className="timetracker__header-settings_btn" onClick={this.toggleSettings}>
                    <svg className="icon icon-settings" style={default_color}><use xlinkHref="#icon-settings"></use></svg>
                </a>
                <TimeTrackerSettings
                    colors={this.props.colors}
                    settingsForm={this.props.settingsForm}
                    reminder={this.props.reminder}
                    changeColor={this.props.changeColor}
                    toggleReminder={this.props.toggleReminder} />
            </header>
        );
    }
}