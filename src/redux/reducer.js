let preState = {
  name: '',
  phone: '',
  email: '',
  url: '',
  city: '',
  organization: '',
  recipient: '',
  sources: '',
};


const reducer = (state = preState, action) => {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.payload };
    case 'phone':
      return { ...state, phone: action.payload };
    case 'email':
      return { ...state, email: action.payload };
    case 'url':
      return { ...state, url: action.payload };
    case 'city':
      return { ...state, city: action.payload };
    case 'organization':
      return { ...state, organization: action.payload };
    case 'recipient':
      return { ...state, recipient: action.payload };
    case 'sources':
      return { ...state, sources: action.payload };
      case 'del':
      return { name: '', phone: '', email: '', url: '', city: '', organization: '', recipient: '', sources: '',};
    default:
      return state;
  }
};

export default reducer;
