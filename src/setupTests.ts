import { configure } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import "jest";

jest.setTimeout(30000);

configure({ adapter: new Adapter() });
