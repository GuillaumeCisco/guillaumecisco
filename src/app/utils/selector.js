import {createSelectorCreator, defaultMemoize} from 'reselect';
import isEqual from 'lodash-es/isEqual';

const createDeepEqualSelector = createSelectorCreator(
    defaultMemoize,
    isEqual,
);

export default createDeepEqualSelector;
