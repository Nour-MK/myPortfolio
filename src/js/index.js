import { preloadFonts } from './utils';
import { TypeShuffle } from './typeShuffle';

preloadFonts('biu0hfr').then(() => {
    document.body.classList.remove('loading');

    const textElement = document.querySelector('.content');
    
    const ts = new TypeShuffle(textElement);
    ts.trigger('fx5'); // Change to effect 5
});