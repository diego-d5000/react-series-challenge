import reducer from './favorites';
import { toggleFavoriteGif } from '../actions/favorites'

describe('favorites reducer', () => {
  test('toggleFavoriteGif', () => {
    const mockGifData = {
      '8FMLOqBX3TwBxnKbrA': {
        "type": "gif",
        "id": "8FMLOqBX3TwBxnKbrA",
        "slug": "ellamai-ella-mai-bood-up-8FMLOqBX3TwBxnKbrA",
        "images": {
          "fixed_width": {
            "url": "https://media2.giphy.com/media/8FMLOqBX3TwBxnKbrA/200w.gif",
            "width": "200",
            "height": "112",
            "size": "739715",
            "mp4": "https://media2.giphy.com/media/8FMLOqBX3TwBxnKbrA/200w.mp4",
            "mp4_size": "142753",
            "webp": "https://media2.giphy.com/media/8FMLOqBX3TwBxnKbrA/200w.webp",
            "webp_size": "265118"
          }
        }
      }
    };
    const mockGifsData = {
      '8FMLOqBX3TwBxnKbrA': {
        "type": "gif",
        "id": "8FMLOqBX3TwBxnKbrA",
        "slug": "ellamai-ella-mai-bood-up-8FMLOqBX3TwBxnKbrA",
        "images": {
          "fixed_width": {
            "url": "https://media2.giphy.com/media/8FMLOqBX3TwBxnKbrA/200w.gif",
            "width": "200",
            "height": "112",
            "size": "739715",
            "mp4": "https://media2.giphy.com/media/8FMLOqBX3TwBxnKbrA/200w.mp4",
            "mp4_size": "142753",
            "webp": "https://media2.giphy.com/media/8FMLOqBX3TwBxnKbrA/200w.webp",
            "webp_size": "265118"
          }
        }
      },
      "7vzoRu05YJp2pFMd24": {
        "type": "gif",
        "id": "7vzoRu05YJp2pFMd24",
        "slug": "ellamai-ella-mai-bood-up-7vzoRu05YJp2pFMd24",
        "images": {
          "fixed_width": {
            "url": "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/200w.gif",
            "width": "200",
            "height": "112",
            "size": "361247",
            "mp4": "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/200w.mp4",
            "mp4_size": "68902",
            "webp": "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/200w.webp",
            "webp_size": "122550"
          }
        }
      }
    };

    const mockAction = toggleFavoriteGif(mockGifData);

    expect(reducer({ gifs: mockGifsData }, mockAction)).toMatchSnapshot();
  })
})