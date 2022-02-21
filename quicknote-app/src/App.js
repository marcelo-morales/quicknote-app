import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: "5c83c052-60da-425f-a302-9d4735a9d6ae",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut.",
          text: "In orci urna, feugiat sed est id, sodales pharetra nisl. Etiam mollis vehicula imperdiet. In iaculis convallis leo, a pretium erat rutrum in. Ut lacus sem, lobortis id lacinia nec, imperdiet at quam. Etiam ut risus ligula. Mauris ac enim ut purus iaculis lobortis. Donec euismod vel risus ac blandit. Sed in odio enim. Aliquam dolor nibh, luctus a fermentum dignissim, ornare nec enim. Sed posuere in arcu eu ultricies.",
        },
        {
          id: "8fd80679-73ff-4425-ae6d-cffe4463d64f",
          title: "Cras bibendum libero eu viverra tristique.",
          text: "Sed et elit id ex lobortis dictum sed vel ex. Mauris id massa interdum, maximus nisl sed, dignissim magna. Donec eu leo varius, malesuada mauris fringilla, porta erat. Nullam consequat auctor tincidunt. Mauris eget lacus ex. Aliquam nibh sem, placerat at nunc at, fringilla auctor dolor. Aliquam eros elit, tempor ut erat eget, interdum porta lacus. Suspendisse in bibendum enim.",
        },
        {
          id: "95747b61-c935-45e9-a156-325307bade96",
          title: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
          text: "Praesent eleifend, lectus non molestie dictum, arcu sapien accumsan eros, sodales dapibus dolor lacus in dolor. Fusce blandit augue condimentum eros luctus ullamcorper. Praesent hendrerit nunc a augue tempor finibus. Morbi ultricies lectus ac risus hendrerit, a aliquam ante tincidunt. Suspendisse viverra iaculis consequat. Nam nec consectetur diam. Cras porta metus in nibh facilisis interdum. Aenean lobortis feugiat enim quis molestie. Suspendisse ultrices bibendum volutpat. Praesent et orci est. Pellentesque ut fringilla nibh. Donec vel pretium nisl. Praesent varius, magna sit amet mollis rutrum, urna lacus rutrum magna, in cursus lectus massa id lorem. Etiam risus enim, fringilla sit amet lectus at, condimentum maximus nulla.",
        },
      ],
    };
  }

  render() {
    return <pre>{JSON.stringify(this.state.notes, null, 2)}</pre>;
  }
}

export default App;
