// import stripComments from 'strip-json-comments';
import thematic from 'sass-thematic';

export default function getVariables(content) {

    let options = {
        data: '{}',
        // varsFile: '',
        varsData: content,
        treeRemoval: true,
        varsRemoval: true,
        // template: true,
    };

    let theme = new thematic({}, options);

    let variables = theme.vars;

    return variables;

}
